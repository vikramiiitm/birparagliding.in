export default function UserProfile({params}: any) {
  return (
    <div>
      <h1>UserProfile</h1>
      <h2>
        {params.id}
      </h2>
    </div>
  );
}
