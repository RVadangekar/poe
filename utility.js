const dns = require('dns');

// 1. dns.lookup: Resolve a hostname to an IP address
dns.lookup('www.javatpoint.com', (err, address, family) => {  
  console.log('addresses:', address);  
  console.log('family:',family);  
}); 

// 2. dns.resolve: Resolve DNS records (A records) for a domain
dns.resolve('example.com', 'A', (err, addresses) => {
    if (err) {
        console.log('Error in dns.resolve:', err);
    } else {
        console.log('A records for example.com:', addresses);
    }
});

// 3. dns.getServers: Get DNS servers configured for the system
const servers = dns.getServers();
console.log('Configured DNS servers:', servers);

// 4. dns.lookupService: Reverse lookup to find hostname and service from IP address and port
dns.lookupService('127.0.0.1', 22, (err, hostname, service) => {
    if (err) {
        console.log('Error in dns.lookupService:', err);
    } else {
        console.log('Hostname:', hostname);
        console.log('Service:', service);
    }
});
