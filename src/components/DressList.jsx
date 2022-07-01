import Rochie from "./Dress";

const DressList = () => {
  return (
    <div className={`d-flex justify-content-center align-items-center`}>
      <Rochie
        picture="https://maria-belini.ro/wp-content/uploads/2018/11/OY-703a-Recovered-1-1321x1833.jpg"
        title="Adelina"
        price={3300}
      />
      <Rochie
        picture="https://maria-belini.ro/wp-content/uploads/2018/11/OY-711c-Recovered.jpg"
        title="Adonia"
        price={3300}
      />
    </div>
  );
};

export default DressList;
