const express = require("express");
const mongoose = require("mongoose");
const User = require("./modal/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("./middleware/auth");
const Post = require("./modal/post");
const Comment = require("./modal/comment");
const app = express();
const cors = require('cors');
const port = 3000;

app.use(cors());

const dbURI =
  "mongodb+srv://anishjaiswal1220:ZHiJzyFBCXeTY7YF@iblog.vehakhq.mongodb.net/";

mongoose
  .connect(dbURI)
  .then(() => {
    console.log("Connected to the mongoDB server");

    app.listen(port, () => {
      console.log(`Your app is listed on port no ${port}`);
    });
  })
  .catch((error) => {
    console.log("Error while connecting to the DB");
  });

app.use(express.json());

app.get("/", (req, res) => {
  res.send("You are on the home page.");
});

app.post("/users", async (req, res) => {
  const { name, email, password } = req.body;

  const user = new User({ name, email, password });

  try {
    const savedUser = await user.save();
    res.status(201).send(savedUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

// User register Route

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).send("User already exist");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ name, email, password: hashedPassword });
    const savedUser = await user.save();

    res.status(201).send(savedUser);
  } catch (error) {
    res.status(500).send("Error creating user:" + error.message);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).send("user not found");

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(400).send("Incorrect Password");

    const token = jwt.sign({ userId: user._id }, "jwt_secret", {
      expiresIn: "2h",
    });

    res.status(200).send(token);
  } catch {
    res.status(400).send("Error while logging In" + error.message);
  }
});

app.get("/profile", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    res.send(user);
  } catch (error) {
    res.status(500).send("Error fetching profile: " + error.message);
  }
});

// Post CRUD Operations

// Create a Post
app.post("/posts", auth, async (req, res) => {
  const { title, content } = req.body;

  const post = new Post({
    title,
    content,
    author: req.user.userId,
  });

  try {
    const savedPost = await post.save();
    res.status(201).send(savedPost);
  } catch (error) {
    res.status(400).send("error creating post" + error.message);
  }
});

// Read all post
app.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find().populate('author', 'name email');
    res.status(200).send(posts);
  } catch (error) {
    res.status(500).send("Error fetching posts: " + error.message);
  }
});

// Read a post
app.get("/posts/:id", auth, async (req, res) => {
    try{
        const post = await Post.findById(req.params.id).populate('author', 'name email');
        if(!post){
            res.status(404).send("Post not found");
        }
        res.status(200).send(post);
    }catch(error){
        res.status(500).send("Error fetching post" + error.message);
    }
});

// Update a post
app.put("/posts/:id", auth, async (req, res) => {
    const {title, content} = req.body;

    try{
        const post = await Post.findById(req.params.id);
        if(!post){
            return res.status(404).send("Post not found");
        }
        if(post.author.toString() !== req.user.userId){
            return res.status(403).send("User not authorized to update the post");
        }

        post.title = title;
        post.content = content;

        const updatePost = await post.save();

        res.status(200).send("updatedPost");
    }catch(error){
        res.status(500).send("Error updating post: " + error.message);
    }
});

// Delete a post
app.delete("/posts/:id", auth, async (req, res) => {
    try{
        const post = await Post.findById(req.params.id);
        if(!post){
            return res.status(404).send("Post not found");
        }
        if(post.author.toString() !== req.user.userId){
            return res.status(403).send("User not authorized to delete the post");
        }

        await post.deleteOne();
        res.status(200).send({message: "Post Deleted"});
    } catch (error){
        res.status(500).send("Error deleting post: "+ error.message);
    }
});

// Comments CRUD Operations

// Create a comment
app.post('/comments', auth, async(req, res)=>{
  const {content, postId} = req.body;

  const comment = new Comment({
    content,
    author: req.body.userId,
    post: postId
  })

  try{
    const saveComment = await comment.save();
    res.status(201).send(saveComment);
  } catch(error){
    res.status(500).send("Error creating comment: " + error.message);
  }
});

// Read all for a spec post
app.get('/comments/:postId', auth, async(req, res)=>{
  try{
    const comment = await Comment.find({post: req.params.postId}).populate('author', 'name email');
    res.status(200).send(comment);
  }catch(error){
    res.status(500).send("Error fetching comments: " + error.message);
  }
});

// Read a comment
// app.get('/comments/:id', auth, async(req, res)=>{});

// Update a comment
app.put('/comments/:id', auth, async(req, res)=>{
  const {content} = req.body;
  
  try{
    const comment = await Comment.findById(req.params.id);

    if(!comment){
      res.status(404).send("comment not found: " + error.message);
    }

    if(comment.author.toString() !== req.user.userId){
      res.status(403).send("User not authorized to Update the comment: " + error.message);
    }

    comment.content = content;
    const updatedComment = await comment.save();

    res.status(200).send(updatedComment);
  }catch{
    res.status(500).send("Unable to update the comment: " + error.message);
  }
});

// Delete a comment
app.delete('/comments/:id', auth, async(req, res)=>{
  try{
    const comment = await Comment.findById(req.params.id);

    if(!comment){
      res.status(404).send("Error while finding comment: " + error.message);
    }

    if(comment.author.toString() !== req.user.userId){
      res.status(403).send("User not authorized to delete the comment: " + error.message);
    }

    await comment.deleteOne();
    res.status(200).send("Comment deleted successfully");
  }catch(error){
    res.status(500).send("Error deleting comment: " + error.message);
  }
});
