import axios from 'axios';

const GetDrinks = () => {
    return axios.get( "http://18.193.130.171/drinks");
  };

  export default GetDrinks;