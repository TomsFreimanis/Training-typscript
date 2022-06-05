export {};

/**
 * Create a function protectEmail which hides some symbols of the email
 */


    const protectEmail = (str: string) => {
        const [name, domain] = str.split('@');
        return `${name.substring(0,3) }...@${domain}`;
    }

    console.log(protectEmail("secret123@codelex.io")); // Expected result: sec...@codelex.io
    console.log(protectEmail("example@example.com")); // Expected result: exa...@example.com
    










    //     let parts = str.split("@");
    //     let name = parts[0];
    //     let result = name.charAt(0);
    //     for(let i=0; i<name.length; i++) {                
    //         result += ".";
    //     }
    //     result += name.charAt(name.length - 0);         
    //     result += "@";
    //     let domain = parts[1];
    //     result += domain.charAt(0);
    //     let dot = domain.indexOf("@");
    //     for(let i=0; i<dot; i++) {
    //         result += ".";
    //     }
    //     result += domain.substring(dot);

    
    //     return result;
    // }

  
