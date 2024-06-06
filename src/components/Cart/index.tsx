import { Meeting, User } from "../../types/common.type";
import "./index.css";

interface Props {
  user: User;
}

const Cart = (props: Props) => {
  const { id, firstName, lastName, email, gender, days, meetings } = props.user;

  const calcTotalDaysWithoutMeeting = () => {
    return (
      days -
      meetings.reduce(
        (acc: number, meeting: Meeting) =>
          acc + (meeting.endDay - meeting.startDay),
        0
      )
    );
  };

  return (
    <div className="w-[300px] rounded-xl bg-white p-4 flex gap-2 items-center justify-center flex-col shadow-lg shadow-cyan-500/50">
      <div className="h-20 w-20 rounded-full bg-orange-400 flex items-center justify-center mb-4">
        <div className="text-center font-bold text-3xl">{id}</div>
      </div>
      <div className="font-bold text-lg">
        {firstName} {lastName}
      </div>
      <div className="bg-[#9082EC] px-4 py-1 rounded-xl mt-4 mb-2 text-yellow-50">
        {email}
      </div>
      <div className="flex gap-8 mb-2">
        <div>
          <span className="font-bold">Gender: </span>
          {gender}
        </div>
        <div>
          <span className="font-bold">Days: </span>
          {days}
        </div>
      </div>
      <div className="flex gap-2 items-start">
        <span className="font-bold">Meeting Days:</span>
        {meetings.length > 0 ? (
          <table>
            <tr>
              <th>Start day</th>
              <th>End day</th>
            </tr>
            {meetings.map((meeting: Meeting) => (
              <tr key={meeting.id}>
                <td>{meeting.startDay}</td>
                <td>{meeting.endDay}</td>
              </tr>
            ))}
          </table>
        ) : (
          <div>0</div>
        )}
      </div>
      <div>
        <span className="font-bold">Days without meeting: </span>
        {calcTotalDaysWithoutMeeting()}
      </div>
    </div>
  );
};

export default Cart;
