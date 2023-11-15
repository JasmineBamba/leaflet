# Earthquake Visualization

This project involves creating a visualization of earthquake data using Leaflet. The goal is to display the earthquakes on a map, with markers reflecting both the magnitude (size) and depth (color) of each earthquake. Additionally, popups will provide more information about each earthquake, and a legend will provide context for interpreting the map data.

## Steps to Replicate the Visualization

1. Dataset Retrieval
Visit the USGS GeoJSON Feed page [USGS GeoJSON Feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) and choose a dataset to visualize. 

2. Data Import and Visualization
- Use the URL of the selected JSON dataset to import the earthquake data.
- Create a Leaflet map to plot the earthquakes based on their longitude and latitude.
- Customize the markers to reflect the earthquake's magnitude (size) and depth (color).
- Add popups to display additional information when a marker is clicked.

3. Legend Creation
- Build a legend to provide context for interpreting the map data.
- Legend should clearly indicate how the marker size and color correspond to magnitude and depth.
  
## Implementation

### Technologies Used
- Leaflet: JavaScript library for interactive maps.
- HTML, CSS, and JavaScript.

### Code Structure
- index.html: The main HTML file containing the structure of the webpage.
- style.css: CSS file for styling the webpage.
- script.js: JavaScript file for implementing the earthquake visualization using Leaflet.

## Code Highlights

1. **Map Initialization:**
- Leaflet map initialized with default settings.
- Base layers (e.g., street and topographic maps) added.

![image](https://github.com/JasmineBamba/leaflet/assets/135666038/7109f374-425c-4824-be7b-6f9857552b78)


2. **Marker Customization and Popups:**
- Earthquake data used to create circle markers with size and color reflecting magnitude and depth.
- Popups added to provide additional information.

![image](https://github.com/JasmineBamba/leaflet/assets/135666038/2ca01ea3-6a3c-41ff-8c67-03b5e5a1b0c2)

 
3. **Legend Creation:**
- Legend dynamically generated based on predefined depth ranges.

![image](https://github.com/JasmineBamba/leaflet/assets/135666038/934a1ff4-b34e-45e9-a808-043ccfc3e0b2)


## Result
The visualization provides an interactive map of earthquakes, with markers conveying both magnitude and depth information. Popups offer additional details about each earthquake, and the legend aids in interpreting the map data.
