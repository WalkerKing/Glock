/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var urls = [];
var encode = function(longUrl) {
	urls.push(longUrl);
    return  "http://tinyurl.com/" + (urls.length - 1);
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    return urls[shortUrl.split('.com/')[1]]
};
for(var k = 0; k < 100; k++){

	encode(k);
}
/**
 * Your functions will be called as such:
 * decode(encode(url));
 */