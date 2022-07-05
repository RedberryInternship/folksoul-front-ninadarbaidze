import { useState, useContext, useCallback, useEffect } from 'react';
import { AdminPanelActionWrapper } from 'components';
import AuthContext from 'store/AuthContext';
import axios from 'axios';
import { Social } from 'pages/Socials/components';

type SocialsTypes = {
  _id: string;
  name: string;
  url: string;
  image: [];
};

const Socials = () => {
  const [data, setData] = useState<SocialsTypes[]>([]);
  const authCtx = useContext(AuthContext);

  const token = localStorage.getItem('token');
  const fetchData = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:3000/social-media`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(response.data);
      setData(response.data);
    } catch (error: any) {}
  }, [token]);

  useEffect(() => {
    fetchData();
  }, [fetchData, authCtx.memberIsEdited]);
  return (
    <>
      <AdminPanelActionWrapper className=' gap-12' header='სოციალური ბმულები'>
        {data.map((data) => (
          <Social {...data} key={data._id} fetchData={fetchData} />
        ))}
      </AdminPanelActionWrapper>
    </>
  );
};

export default Socials;
