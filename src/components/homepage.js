import React from "react";
import {RichText} from "prismic-reactjs";
import Layout from "./_layout";
import HireMe from './HireMe';
import { Carousel } from 'react-responsive-carousel';


class Homepage extends React.Component {


    render() {
        let page = this.props.content.data;

        if (process.env.NODE_ENV !== 'production') {
            console.log(page);
        }


        return (
            <Layout>
                <div>Hello</div>
                <HireMe page={page}/>
            </Layout>
        )
    }
}

export default Homepage;