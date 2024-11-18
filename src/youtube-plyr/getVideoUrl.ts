const getYouTubeUrl = (url) => {
	// extract video id from url https://www.youtube.com/embed/vbTitHGcVDs?si=EkPmIuqz-_GA-C8N
	const videoId = url.split("/").pop().split("?")[0];
	const imageUrl = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

	// replace youtube.com by nocookie.youtube.com
	const cleanedUrl = url.replace("www.youtube.com", "www.youtube-nocookie.com");
	// add param to url
	const destructuredUrl = new URL(cleanedUrl);
	// ?iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1
	destructuredUrl.searchParams.append("iv_load_policy", "3");
	destructuredUrl.searchParams.append("modestbranding", "1");
	destructuredUrl.searchParams.append("playsinline", "1");
	destructuredUrl.searchParams.append("showinfo", "0");
	destructuredUrl.searchParams.append("rel", "0");
	destructuredUrl.searchParams.append("enablejsapi", "1");

	return destructuredUrl.toString();
};

export default getYouTubeUrl;
