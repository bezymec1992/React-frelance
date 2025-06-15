function ListShow() {
  const workerList = [
    { id: 1, name: 'Jon', status: 'Busy' },
    { id: 2, name: 'Bruce lee', status: 'Free' },
    { id: 3, name: 'Monica', status: 'Lost' },
  ];
  return (
    <div className="container">
      <span className="span">task-4</span>
      <h1>List Check</h1>
      <ul>
        {workerList.map(worker => (
          <li key={worker.id} className={worker.status}>
            {worker.name} - {worker.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListShow;
