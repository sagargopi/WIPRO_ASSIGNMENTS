// Task 1: Fetch API to retrieve employee data and display on console
const fetchEmployeeData = async () => {
    const url = "https://dummy.restapiexample.com/api/v1/employees";
    
    try {
        console.log(`Fetching data from ${url}...`);
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status} - ${response.statusText}`);
        }
        
        const data = await response.json();
        console.log("Successfully retrieved employee data:");
        console.log(JSON.stringify(data, null, 2));
    } catch (error) {
        console.error("Error fetching employee data:", error.message);
        if (error.message.includes("429")) {
            console.log("Tip: The API 'dummy.restapiexample.com' frequently returns 429 (Too Many Requests). Please try again after some time.");
        }
    }
};

fetchEmployeeData();
