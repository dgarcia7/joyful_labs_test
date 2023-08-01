import React from "react"
import PropTypes from "prop-types"
import BaseTable from "./BaseTable";

const columns = [
  {name: 'Event', selector: row => row.date_event},
  {name: '', selector: row => row.description,},
  {name: 'Tags', selector: row => row.tags},
  {name: 'Spots', selector: row => row.spots},
  {name: 'Status', selector: row => row.status},
];

const data = [
  {date_event: "Sep 10", description: "Event 1", tags: "tag1, tag2", spots: "32 / 32", status: "active"},
  {date_event: "Sep 11", description: "Event 2", tags: "tag3, tag4", spots: "50 / 50", status: "active"},
  {date_event: "Sep 12", description: "Event 3", tags: "tag5, tag6", spots: "20 / 20", status: "active"},
  {date_event: "Sep 13", description: "Event 4", tags: "tag7, tag8", spots: "80 / 100", status: "draft"},
  {date_event: "Sep 14", description: "Event 5", tags: "tag9, tag10", spots: "40 / 50", status: "active"},
  {date_event: "Sep 15", description: "Event 6", tags: "tag11, tag12", spots: "60 / 60", status: "inactive"},
  {date_event: "Sep 16", description: "Event 7", tags: "tag13, tag14", spots: "70 / 100", status: "draft"},
  {date_event: "Sep 17", description: "Event 8", tags: "tag15, tag16", spots: "90 / 100", status: "draft"},
  {date_event: "Sep 18", description: "Event 9", tags: "tag17, tag18", spots: "30 / 30", status: "active"},
  {date_event: "Sep 19", description: "Event 10", tags: "tag19, tag20", spots: "10 / 20", status: "draft"},
  {date_event: "Sep 20", description: "Event 11", tags: "tag21, tag22", spots: "70 / 100", status: "draft"},
  {date_event: "Sep 21", description: "Event 12", tags: "tag23, tag24", spots: "40 / 50", status: "active"},
  {date_event: "Sep 22", description: "Event 13", tags: "tag25, tag26", spots: "60 / 60", status: "active"},
  {date_event: "Sep 23", description: "Event 14", tags: "tag27, tag28", spots: "80 / 100", status: "inactive"},
  {date_event: "Sep 24", description: "Event 15", tags: "tag29, tag30", spots: "90 / 100", status: "draft"},
  {date_event: "Sep 25", description: "Event 16", tags: "tag31, tag32", spots: "30 / 30", status: "inactive"},
  {date_event: "Sep 26", description: "Event 17", tags: "tag33, tag34", spots: "10 / 20", status: "active"},
  {date_event: "Sep 27", description: "Event 18", tags: "tag35, tag36", spots: "70 / 100", status: "draft"},
  {date_event: "Sep 28", description: "Event 19", tags: "tag37, tag38", spots: "40 / 50", status: "active"},
  {date_event: "Sep 29", description: "Event 20", tags: "tag39, tag40", spots: "60 / 60", status: "active"}
]

class EventsTable extends React.Component {
  render () {
    return (
      <BaseTable title="Event" columns={columns} data={data} exp />
    );
  }
}

export default EventsTable
