export const getEstimation = (name: string) => {
    switch (name) {
      case "gosend":
        return "Today";
      case "jne":
        return "2 days";
      case "personal-courier":
        return "1 day";
    }
  };
  
export const getLabel = (name : string) => {
    switch (name) {
      case "gosend":
        return "GO-SEND";
      case "jne":
        return "JNE";
      case "personal-courier":
        return "Peronal Courier";
    }
  };


export  const getPaymentLabel = (name : string) => {
    switch (name) {
      case "e-wallet":
        return "E-Wallet";
      case "bank":
        return "Bank Transfer";
      case "virtual-account":
        return "Virtual Account";
    }
  };
  
  
  
export const getFee = (name : string) => {
    switch (name) {
      case "gosend":
        return 15000;
      case "jne":
        return 9000;
      case "personal-courier":
        return 29000;
      default :
        return "-"
    }
  };