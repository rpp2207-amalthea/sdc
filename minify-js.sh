for file in /home/ubuntu/golden-fan-shop/client/dist/*.js; do
    uglifyjs "$file" --stats -c -m  -o "$file"
    echo minified: "$file"
done