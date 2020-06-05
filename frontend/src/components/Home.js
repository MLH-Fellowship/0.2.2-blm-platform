import React, { useEffect, useState } from 'react';
import {
  Grid,
  Typography
} from "@material-ui/core";
import NewsItem from "./NewsItem";

function Home() {
  const [newsList, setNewsList] = useState([]);
  useEffect(() => {
    const newsList = [
      {
        title: "Black Visions Collective",
        date: "2020-06-05 12:17:48.616",
        img: "https://bsp-static.playbill.com/dims4/default/9e8d33d/2147483647/crop/970x546%2B0%2B0/resize/970x546/quality/90/?url=http%3A%2F%2Fpb-asset-replication.s3.amazonaws.com%2Ffa%2F20%2F718ce329428fa1b0ad3e2213aaed%2Fblm.jpg",
        body: "Black Visions Collective (BLVC) believes in a future where all Black people have autonomy, safety is community-led, and we are in right relationship within our ecosystems."
      },
      {
        title: "Emergency Release Fund",
        url: "https://emergencyreleasefund.com/wp-content/uploads/2019/09/a43f8d1d43678110454a85dffc9769a2d692.w700.a700x467.2x-e1569083831602.jpg",
        date: "2020-06-05 12:17:48.616",
        img: "https://emergencyreleasefund.com/wp-content/uploads/2019/09/a43f8d1d43678110454a85dffc9769a2d692.w700.a700x467.2x-e1569083831602.jpg",
        body: "URGENT UPDATE: New York City jails have become the epicenter of COVID-19 with an estimated 1 in 10 people who have tested positive while in […] Read More"
      },
      {
        title: "Freedom Fund",
        url: "https://www.lgbtqfund.org/",
        date: "2020-06-05 12:17:48.617",
        img: "http://static1.squarespace.com/static/599cef41f14aa13aa685bd06/t/5c2a4da3c2241bc8b4f5510d/1546276263081/Untitled+2.png?format=1500w",
        body: "The Freedom Fund posts bond to secure the release and safety of LGBTQ people in jail and immigration detention."
      },
      {
        title: "NAACPNAACP | Home",
        url: "https://www.naacp.org/",
        date: "2020-06-05 12:17:48.618",
        img: "https://www.naacp.org/wp-content/uploads/2016/08/black-square.png",
        body: "The mission of the National Association for the Advancement of Colored People is to ensure the political, educational, social, and economic equality of rights of all persons and to eliminate race-based discrimination."
      },
      {
        title: "Community Justice Exchange",
        url: "https://www.communityjusticeexchange.org/",
        date: "2020-06-05 12:17:48.619",
        img: "http://static1.squarespace.com/static/5e1f966c45f53f254011b45a/t/5e3ca589e8b7ab444252f81d/1581032847810/Screen+Shot+2020-02-06+at+6.46.21+PM.png?format=1500w",
        body: ""
      },
      {
       title: "Donate - National Police Accountability Project",
       url: "https://www.nlg-npap.org/donate/",
       date: "2020-06-05 12:17:48.619",
       img: "https://bsp-static.playbill.com/dims4/default/9e8d33d/2147483647/crop/970x546%2B0%2B0/resize/970x546/quality/90/?url=http%3A%2F%2Fpb-asset-replication.s3.amazonaws.com%2Ffa%2F20%2F718ce329428fa1b0ad3e2213aaed%2Fblm.jpg",
       body: "National Police Accountability Project (NPAP) is a non-profit membership organization dedicated to ending law enforcement abuse of authority through coordinated legal action, public education, and support for grassroots and victims' organizations combating misconduct."
      },
      {
        title: "Equal Justice Initiative",
        url: "https://eji.org/",
        date: "2020-06-05 12:17:48.620",
        img: "https://eji.org/wp-content/uploads/2019/11/eji-home-support1.jpg",
        body: "EJI works to end mass incarceration, excessive punishment, and racial inequality."
      },
      {
        title: "Innocence Project - Help us put an end to wrongful convictions!",
        url: "https://www.innocenceproject.org/",
        date: "2020-06-05 12:17:48.620",
        img: "https://www.innocenceproject.org/wp-content/uploads/2019/04/thumbnail-small.png",
        body: "The Innocence Project exonerates the wrongly convicted through DNA testing and reforms the criminal justice system to prevent future injustices."
      },
      {
        title: "The Marshall Project",
        url: "https://www.themarshallproject.org/",
        date: "2020-06-05 12:17:48.620",
        img: "https://s3.amazonaws.com/tmp-uploads-1/social/mp-fb-og.png",
        body: "A nonprofit news organization covering the U.S. criminal justice system."
      },
      {
        title: "Color Of Change | We help you do something real about injustice.",
        url: "https://colorofchange.org/",
        date: "2020-06-05 12:17:48.620",
        img: "https://bsp-static.playbill.com/dims4/default/9e8d33d/2147483647/crop/970x546%2B0%2B0/resize/970x546/quality/90/?url=http%3A%2F%2Fpb-asset-replication.s3.amazonaws.com%2Ffa%2F20%2F718ce329428fa1b0ad3e2213aaed%2Fblm.jpg",
        body: "Color Of Change designs campaigns powerful enough to end practices that unfairly hold Black people back, and champion solutions that move us all forward."
      },
      {
        title: "ActBlue",
        url: "https://secure.actblue.com/donate/bail_funds_george_floyd",
        date: "2020-06-05 12:17:48.621",
        img: "https://actblue-indigo-uploads.s3.amazonaws.com/uploads/list-editor/5e80216f-453a-4cb7-91b0-217e9349310a-meta.png",
        body: "Split a donation to all the bail funds, mutual aid funds, and activist organizations listed on this page. If you have questions or would like to get a local bail fund in your area added to this page, please send a Twitter DM to @AidanKingVT."
      },
      {
        title: "Mass Defense Program | National Lawyers Guild",
        url: "https://www.nlg.org/massdefenseprogram/",
        date: "2020-06-05 12:17:48.621",
        img: "https://www.nlg.org/wp-content/uploads/2016/05/Blair-Anderson-LO-Ferguson-Oct.jpg",
        body: "The Mass Defense Committee (MDC) is a network of lawyers, legal workers and law students providing legal support for political activists, protesters and movements for social change. MDC members in …"
      },
      {
        title: "Black Lives Matter | American Friends Service Committee",
        url: "https://www.afsc.org/category/blog-tags/black-lives-matter",
        date: "2020-06-05 12:17:48.621",
        img: "https://bsp-static.playbill.com/dims4/default/9e8d33d/2147483647/crop/970x546%2B0%2B0/resize/970x546/quality/90/?url=http%3A%2F%2Fpb-asset-replication.s3.amazonaws.com%2Ffa%2F20%2F718ce329428fa1b0ad3e2213aaed%2Fblm.jpg",
        body: "Skip to content Skip to navigation Search form Search Home About AFSC Key Issues Get Involved Donate Where We Work Blog Contact About AFSC Where We Work Blog Get Involved Key issues DonateGive Now Give Monthly Make a tribute All Giving Options Black Lives Matter 6 reasons why it’s time to defund the police By Mary Zerkel, 6.4.20 Sanctuary Spaces: An Introduction By Christina Elcock, 2.9.18 Undoing"
      },
      {
        title: "8 Can't Wait",
        url: "https://8cantwait.org/",
        date: "2020-06-05 12:17:48.621",
        img: "https://8cantwait.org/assets/social-share-104eb7691af00cb7db3ecb5066441c2d8b1e7ef6183d27840d07c2023e80cd9e.jpg",
        body: "Cities that enact these eight use-of-force policies can reduce police violence by 72%. Look up your city and contact your mayor now."
      },
      {
        title: "WEEK OF ACTION – M4BL",
        url: "https://m4bl.org/week-of-action/",
        date: "2020-06-05 12:17:48.622",
        img: "https://bsp-static.playbill.com/dims4/default/9e8d33d/2147483647/crop/970x546%2B0%2B0/resize/970x546/quality/90/?url=http%3A%2F%2Fpb-asset-replication.s3.amazonaws.com%2Ffa%2F20%2F718ce329428fa1b0ad3e2213aaed%2Fblm.jpg",
        body: "THE MOVEMENT FOR BLACK LIVES We want to start by saying we see you. We see all of those who have taken action from their computers, in their communities and on the streets. This week we are asking folks to continue to join us in the defense of Black life. The time for action is now, people are taking to the streets, flooding social media, calling local officials and demanding justice for those who"
      },
      {
        title: "Home — Reclaim the Block",
        url: "https://www.reclaimtheblock.org/home",
        date: "2020-06-05 12:17:48.623",
        img: "http://static1.squarespace.com/static/5d8faf6f8ba16e7343478cdb/t/5d9be54a0654d339b9c22b52/1570497869664/Reclaim+The+Block+Logos+_+Badges-01.jpg?format=1500w",
        body: ""
      }
    ];
    setNewsList(newsList);
  }, []);
  return <div style={{padding: "20px"}}>
    <Typography variant="h2" align="center" style={{marginBottom: "5px"}}>In The News</Typography>
    <Grid container spacing={3}>
      {newsList.map((newsItem) => {
        return (
          <Grid item xs={4}>
            <NewsItem content={newsItem}></NewsItem>
          </Grid>
        );
      })}
    </Grid>
  </div>;
}

export default Home;
