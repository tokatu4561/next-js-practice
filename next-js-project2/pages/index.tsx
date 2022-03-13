import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "title",
    title: "first meet up",
    image:
      "https://th.bing.com/th/id/OIP.gbbsR2JuR_b6u3b3h1-mLgHaE8?pid=ImgDet&rs=1",
    address: "東京",
    description: "鳥です",
  },
  {
    id: "title",
    title: "first meet up",
    image:
      "https://th.bing.com/th/id/OIP.gbbsR2JuR_b6u3b3h1-mLgHaE8?pid=ImgDet&rs=1",
    address: "東京",
    description: "鳥です",
  },
];

export default function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS}></MeetupList>;
}
