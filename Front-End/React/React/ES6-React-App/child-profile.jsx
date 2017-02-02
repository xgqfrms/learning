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
