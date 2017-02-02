// child component & function(args)

const Profile = ({avatar, name}) => {
    return (
        <div>
            <img src={avatar} />
            <span>{name}</span>
        </div>
    );
}

/*

class Profile extends React.Component {
    avatar: "https://cdn.xgqfrms.xyz/logo/favicon.png",
    name: "xgqfrms-2017(react-jsx)child-profile.jsx",
    age: 23,
    render() {
        return(
            <div>
                <h1>
                    Hello <mark>{this.props.name}</mark>
                </h1>
                <h2> Age : {this.props.age}</h2>
            </div>
        );
    }
}

*/

/*

// props  

{this.props}

getDefaultProps: function () {
    // Return an object:
    return { text: 'yo' };
},


// state 

getInitialState: function () {
    return { title: 'Best App' }
},

*/


/*

// object

var redPanda = {
    src: 'http://bit.ly/1U92LL3',
    alt: 'Red Panda',
    width:  '200px'
};

// auto complete px  
// width:  '200px' === width:  '200'

var RedPanda = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Cute Red Panda</h1>
                <img 
                    src={redPanda.src} 
                    alt={redPanda.alt} 
                    width={redPanda.width} 
                />
            </div>
        );
    }
});



*/
