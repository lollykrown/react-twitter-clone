import React from 'react'
import Title from "../components/reusables/Title";
import Tweet from "../components/Tweet";

export default function Bookmarks() {
    const tweet = `This whole #EndSARS is just for the media, this happened yesterday in Glover street in Ebute-Metta. 
    We are jokers in this country, this guy trains kids how to ride a unicycle every weekend for free.
    I swear I am done with this country.
    `;

    return (
        <div className="home col-sm-10 col-md-10 col-lg-6" >
            <Title title="bookmarks"  username='@oluwakayy' icon="null" />

            <Tweet tweet={tweet} name='nurse kay' username='@oluwakayy'/>         
        </div>
    )
}
