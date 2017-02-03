# React JSX comment   



# ??? React JSX comment ???

// import LikeButton from './like-unlike'
// var LikeButton = require('./like-unlike');



// /*<LikeButton /> ??? React JSX comment ??? */




const App = () => {
    let name = "React ❤ ES6";
    return (
        <div>
            <p>
                <h1>
                    Hello <mark>{name}</mark>!
                </h1>
            </p>
            <span>
                <mark>Profile</mark> ❤ placeholder!
            </span>
            <mark>??? React JSX comment ???</mark>
        </div>
    );
}










