#!/bin/sh

# Create zips
cd dist
zip -r chrome.zip chrome/
zip -r firefox.zip firefox/
cd ..

echo "Build and zip complete! Check dist/*.zip"
