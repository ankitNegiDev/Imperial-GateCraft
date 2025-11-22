function YouTubeEmbed() {
    return (
        <div className="w-full aspect-video rounded-lg overflow-hidden shadow mt-15">
            <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/mXl-12JtCQM"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    );
}

export default YouTubeEmbed;
