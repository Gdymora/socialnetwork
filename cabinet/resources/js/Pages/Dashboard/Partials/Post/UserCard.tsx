export default function UserCard({ user }) {
    const { name, description, imageUrl } = user;
    const defaultImageUrl = 'assets/images/galery/pexels-photo-18784917.webp';
  
    return (
      <div className="user-card">
        <img src={imageUrl || defaultImageUrl} alt={`Аватар ${name}`} />
        <h3>{name}</h3>
        <p>{description}</p>
        <button className="add-friend-button">Додати в друзі</button>
      </div>
    );
  }