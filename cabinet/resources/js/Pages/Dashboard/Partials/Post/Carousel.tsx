import UserCard from "./UserCard";

export default function Carousel({ users }) {
    return (
      <div className="carousel-container">
        <div className="carousel-wrapper">
          {users.map(user => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </div>
    );
  }