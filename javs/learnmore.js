const navigation =
    document.querySelector(".primary-navigation");
const navigationHeight = 
    navigation.offsetHeight;
document.documentElement.style.setProperty("--scrollpadding",navigationHeight +"px");