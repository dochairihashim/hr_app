
   module.exports = {
  hrPool: {
    user: process.env.HR_USER,
    password: process.env.HR_PASSWORD,
    connectString: process.env.HR_CONNECTIONSTRING,
    poolMin: 10,
    poolMax: 10,
    poolIncrement: 0
  }
};

/*
module.exports = {
    hrPool: {
    user          : "cmsadmin",
    password      : "cmsadmin2018",
    connectString : "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=172.16.100.11)(PORT=1521))(CONNECT_DATA=(SERVICE_NAME=stagingdb)))",
    poolMin: 10,
      poolMax: 10,
      poolIncrement: 0
    }
  };
*/