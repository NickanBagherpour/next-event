import { useRouter } from 'next/router';

import { getAllEvents } from '../../data/dummy-data';
import EventList from '../../components/events/event-list';

const AllEventsPage = () => {
  const router = useRouter();
  const events = getAllEvents();

    return (
      <>
        <EventList items={events} />
      </>
    );
  }
  
  export default AllEventsPage;
  