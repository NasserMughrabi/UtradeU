const mongoose = require('mongoose')

const User = require('../schemas/User')
const {Comments,Post} = require('../schemas/Post')

async function seedDB ()
{
    await seedDBUsers()
    await seedDBPosts()
}

async function seedDBUsers ()
{
    await User.deleteMany({}).then(function(){
        console.log("Should have deleted all Users :)");
    }).catch(function(error)
    {
        console.log(error)
    });
    const users = [
        new User(
            {
                firstName: "Jacob",
                lastName: "Day",
                uID: "u1111111",
                phoneNumber : "111-111-1111",
                email : "test@test.com",
                bio : "I am a stegosaurus",
                major : "CS",
                services: ["Photography", "Rubik's Cube Tutoring"]

            }
        ),
        new User(
            {
                firstName: "Nasser",
                lastName: "Mughrabi",
                uID: "u2222222",
                phoneNumber : "123-456-7890",
                email : "test2@test.com",
                bio : "Front end is love, Front end is life",
                major : "CS",
                services: ["Editing", "Filming", "Acting"]

            }
        ),
        new User(
            {
                firstName: "Aisha",
                lastName: "Khan",
                uID: "u7654321",
                phoneNumber : "222-222-2222",
                email : "t3st@test.com",
                bio : "If there's one thing about me, it's that I always got a matcha in hand and my legs crossed",
                major : "CS",
                services: ["Painting", "Coffee Getting"]

            }
        ),
        new User(
            {
                firstName: "Cameron",
                lastName: "Hanney",
                uID: "u3423145",
                phoneNumber : "555-678-9012",
                email : "test4@test.com",
                bio : "Everything either is or isn't a potato",
                major : "CS",
                services: ["Firing people", "Singing the avocado song"]

            }
        ),
        new User(
            {
                firstName: "Admin",
                lastName: "Admin",
                uID: "u0000000",
                phoneNumber : "N/A",
                email : "admin@utradeu.com",
                bio : "Feeling a little bit adminny today",
                major : "Administration",
                services: ["Deleting inappropriate posts", "Moderating", "Sleeping"]

            }
        ),
    ];
    await User.insertMany(users)
    .then(function()
    {
        console.log("Added a bunch of Users :))))");
    })
    // .error(function(error)
    // {
    //     console.log(error);
    // })
    ;
}

async function seedDBPosts()
{
    await Post.deleteMany({}).then(function(){
        console.log("Should have deleted all Posts :)");
    }).catch(function(error)
    {
        console.log(error)
    });

    const users = await User.find().exec();

    const posts = [
        new Post(
            {
                user : "Jacob Day",
                likes: 4,
                description: "Camera for the photography class",
                pictureURL: "camera.png",
                liked: false
            }
        ),
        new Post(
            {
                user : "Nasser Mughrabi",
                likes: 20,
                description: "Calculator",
                pictureURL: "calculator.png",
                liked: false
            }
        ),
        new Post(
            {
                user : "Aisha Khan",
                likes: 20382,
                description: "Desk Lamp from Pixar",
                pictureURL: "lamp.png",
                liked: false
            }
        ),
        new Post(
            {
                user : "Cameron Hanney",
                likes: 2,
                description: "Brand New Air fryer, this thing has saved my life 30 times",
                pictureURL: "air_fryer.png",
                liked: false
            }
        ),
        new Post(
            {
                user : "Admin Admin",
                likes: 126,
                description: "Coolest shoes around the block",
                pictureURL: "shoes.png",
                liked: false
            }
        ),
        new Post(
            {
                user : "Jacob Day",
                likes: 0,
                description: "Old laptop, 128GB RAM, 128GB SSD, Windows 9",
                pictureURL: "laptop.png",
                liked: false
            }
        ),
        new Post(
            {
                user : "Nasser Mughrabi",
                likes: 20,
                description: "An old shirt I don't want, free",
                pictureURL: "shirt.png",
                liked: false
            }
        ),
        new Post(
            {
                user : "Aisha Khan",
                likes: 20382,
                description: "Microwave, 120 Watts, works like new",
                pictureURL: "microwave.png",
                liked: false
            }
        ),
        new Post(
            {
                user : "Cameron Hanney",
                likes: 2,
                description: "My old Fish moved out, so we have an extra tank up for sale",
                pictureURL: "fish_tank.png",
                liked: false
            }
        ),
        new Post(
            {
                user : "Admin Admin",
                likes: 126,
                description: "Airpods, I got an android phone and can't be seen using two competitors together",
                pictureURL: "airpods.png",
                liked: false
            }
        )
    ]

    await Post.insertMany(posts).then(console.log("Should have added a bunch of posts :))))"))
}

module.exports = seedDB;
