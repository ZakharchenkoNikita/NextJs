import MeetupList from "../components/meetups/MeetupList";

const data = [
  {
    id: "m1",
    title: "A first meetup",
    image:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80",
    addres: "Some address5, 123456 City",
    description: "Some description",
  },
  {
    id: "m2",
    title: "A second meetup",
    image:
      "https://images.unsplash.com/photo-1467226632440-65f0b4957563?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTl8fHxlbnwwfHx8fA%3D%3D&w=1000&q=80",
    addres: "Some address5, 123456 City",
    description: "Some description",
  },
];

const HomePage = () => {
  return <MeetupList meetups={data} />;
};

export default HomePage;
