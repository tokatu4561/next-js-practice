import NewMeetupForm from "../../components/meetups/NewMeetupForm";

export default function NewMeetupPage() {
  const addMeetupHandler = (enteredMeetupDate) => {};

  return <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>;
}
