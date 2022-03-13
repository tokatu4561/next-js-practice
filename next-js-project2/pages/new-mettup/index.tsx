import NewMeetupForm from "../../components/meetups/NewMeetupForm";

export function NewMeetupPage() {
  const addMeetupHandler = (enteredMeetupDate) => {};

  return <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>;
}
