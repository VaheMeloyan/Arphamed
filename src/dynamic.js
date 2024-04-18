import { useEffect } from 'react';

const API = 'https://arfa-med.onrender.com';
function GetForHome(setLoading) {

  useEffect(() => {
    const url = `${API}/home/get/mixins/`;

    fetch(url, {
      method: 'GET',

    },

    )
      .then(response => {

        if (!response.ok) {
          console.log(response);
          throw new Error(`ERROR -  Status: ${response.status}`);

        }
        return response.json();
      })
      .then(data => {

        Object.keys(data['home']).map(key => {

          return dynamic[`${key}`] = data['home'][`${key}`];
        });



        setLoading(false);
      })

      .catch(error => {
        console.log('ERROR: ' + error);
      });
  }, []);


}


function GetForService(setLoading) {

  useEffect(() => {
    const url = `${API}/services/get/mixins/`;

    fetch(url, {
      method: 'GET',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`ERROR -  Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {

        Object.keys(data['services']).map(key => dynamic[`${key}`] = data['services'][`${key}`]);

        setLoading(false);
      })

      .catch(error => {
        console.log('ERROR: ' + error);
      });
  }, []);


}

function GetForDeviceProduct(setLoading) {

  useEffect(() => {
    const url = `${API}/devices/product/get/custom_data/`;

    fetch(url, {
      method: 'GET',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`ERROR -  Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {

        Object.keys(data['devices']).map(key => dynamic[`${key}`] = data['devices'][`${key}`]);

        setLoading(false);
      })

      .catch(error => {
        console.log('ERROR: ' + error);
      });
  }, []);


}





function GetForDeviceContuctUs(setLoading) {

  useEffect(() => {
    const url = `${API}/contact_us/get/mixins/`;

    fetch(url, {
      method: 'GET',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`ERROR -  Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {

        Object.keys(data['contactUs']).map(key => dynamic[`${key}`] = data['contactUs'][`${key}`]);

        setLoading(false);
      })

      .catch(error => {
        console.log('ERROR: ' + error);
      });
  }, []);

}

function GetForSideBar(setLoading) {

  useEffect(() => {
    const url = `${API}/blog/get/categories/`;

    fetch(url, {
      method: 'GET',
    })
      .then(response => {

        if (!response.ok) {
          throw new Error(`ERROR -  Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {

        Object.keys(data['sideBar']).map(key => dynamic[`${key}`] = data['sideBar'][`${key}`]);

        setLoading(false);
      })

      .catch(error => {
        console.log('ERROR: ' + error);
      });
  }, []);

}

function GetForFaq(setLoading) {

  useEffect(() => {
    const url = `${API}/faq/get/questions/`;

    fetch(url, {
      method: 'GET',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`ERROR -  Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {

        Object.keys(data['faq']).map(key => dynamic[`${key}`] = data['faq'][`${key}`]);

        setLoading(false);
      })

      .catch(error => {
        console.log('ERROR: ' + error);
      });
  }, []);

}



function GetForSingleBlog(setLoading) {

  useEffect(() => {
    const url = `${API}/get/global/blog/`;

    fetch(url, {
      method: 'GET',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(`ERROR -  Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {

        Object.keys(data).map(key => dynamic[`${key}`] = data[`${key}`]);
        setLoading(false);
      })

      .catch(error => {
        console.log('ERROR: ' + error);
      });
  }, []);


}

const dynamic = {

};

export {
  dynamic,
  GetForHome,
  GetForService,
  GetForDeviceProduct,
  GetForDeviceContuctUs,
  GetForFaq,
  GetForSingleBlog,
  GetForSideBar,
  API
};

