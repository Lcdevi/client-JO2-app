import React, { Component } from 'react';

class testJson extends Component {

    
    componentDidMount() {
        const renderShape1Items = async () => {
            let uri = ' http://localhost:3000/shape1';
    
            const res = await fetch(uri);
            const posts = await res.json();
            console.log(posts)
        }
        console.log("all items shape 1")
    }

    render() {
        return (
            <div>
                <h1>test Json</h1>
            </div>
        )
    }
}

export default testJson;