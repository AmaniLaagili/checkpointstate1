import React from "react";
import image1 from "../image/image.PNG";

export default class Profil extends React.Component {
    constructor(props) {
        super(props);
        /*  console.log("this is from constructor", Date.now());*/

        this.state = {
            fullName: "ameni",
            bio: "bio",
            imgSrc: image1,
            profession: "informatique",
            show: false,
            count: 0,
            date: new Date(),
            intervalID: 0,
        };
    }
    componentDidMount() {
        this.state.intervalID = setInterval(() => {
            this.setState({ count: this.state.count + 1 });
        }, 1000);
        console.log("componentDidMount");
        this.interval = setInterval(() => {
            this.setState({ date: new Date() });
        }, 1000);
    }

    componentDidUpdate() {
        if (this.state.count == 7) clearInterval(this.state.intervalID);
    }
    /* console.log(count);*/
    // const interval = setInterval((count = this.state.count) => {
    /* const map1 = array1.map((x) => x * 2);*/
    /*this.state. count = this.setState.count + 1;*/
    /* console.log("This will run every second!");*/

    /*console.log("Grand Child did mount.", Date.now());*/
    // this.timerID = setInterval(() => this.tick(), 1000);

    // this.timerID = setInterval(() => this.tick(), 1000);

    componentWillUnmount() {
        clearInterval(this.interval);
        console.log("componentWillUnmount");
    }

    // tick() {
    //     this.setState({
    //         date: new Date(),
    //     });
    // }

    textClick = () => {
        this.state.show === true
            ? this.setState({ show: false })
            : this.setState({ show: true });

        /*    this.state.show === true ? (
                <h1>{this.state.fullName}</h1>
            ) : (
                this.setState({ show: false })
            );*/
    };

    render() {
        if (this.state.show) {
            return (
                <div>
                    <button type="button" onClick={this.textClick}>
                        Click
                    </button>
                    <h1>{this.state.fullName}</h1>
                    <h1>{this.state.bio}</h1>
                    <img src={this.state.imgSrc} alt="photo" />
                    <h1> {this.state.profession}</h1>
                    TimeConteur: <span>{this.state.count} </span>
                    <h2>
                        Il est Time :{this.state.date.toLocaleTimeString()}.
                    </h2>
                </div>
            );
        } else {
            return (
                <div>
                    <button
                        type="button"
                        onClick={() => {
                            this.textClick();
                        }}
                    >
                        Click
                    </button>
                    <h2>
                        Il est Time :{this.state.date.toLocaleTimeString()}.
                    </h2>
                </div>
            );
        }
    }
}
