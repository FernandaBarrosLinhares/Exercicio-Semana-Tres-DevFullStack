return Cars;


 window.onload = (e) => {
    const resObj = {};
    const formTag = document.location.hash.replace("#", "" );
    const formRes = document.location.search
      .replace("?","")
      .split("&")
      .map((item) => {
         const splitItem = item.split("=");
         resObj[splitItem[0]] = splitItem[1];
      });

switch (formTag) {
   case "brand":
      registerBrand(resObj.brand);
      break;
   }
};