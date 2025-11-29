"use client";
import { useState } from "react";
import Image from "next/image";

export default function VideoGenerateSection() {
    const [prompt, setPrompt] = useState("");
    const [isGenerating, setIsGenerating] = useState(false);
    const [generatedVideos, setGeneratedVideos] = useState<GeneratedVideo[]>([]);
    const [selectedVideo, setSelectedVideo] = useState<GeneratedVideo | null>(null);

    const handleGenerate = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!prompt.trim()) return;
        
        setIsGenerating(true);
        
        // Simulate video generation process
        setTimeout(() => {
            const newVideo: GeneratedVideo = {
                id: Date.now().toString(),
                prompt: prompt,
                thumbnail: "/assets/images/section/video-placeholder.webp",
                videoUrl: "/assets/videos/sample-video.mp4",
                duration: "5s",
                quality: "720p",
                createdAt: new Date(),
                isGenerating: false
            };
            
            setGeneratedVideos(prev => [newVideo, ...prev]);
            setSelectedVideo(newVideo);
            setIsGenerating(false);
            setPrompt("");
        }, 3000);
    };

    return (
        <>
            <section className="section-video-generate flat-spacing-2">
                <div className="container-fluid">
                    <div className="video-generate-workspace">
                        {/* Left Column - Video Gallery */}
                        <div className="video-gallery-column">
                            <VideoGallery 
                                videos={generatedVideos}
                                selectedVideo={selectedVideo}
                                onSelectVideo={setSelectedVideo}
                                isGenerating={isGenerating}
                                currentPrompt={prompt}
                            />
                        </div>

                        {/* Right Column - Control Panel */}
                        <div className="control-panel-column">
                            <ControlPanel 
                                prompt={prompt}
                                setPrompt={setPrompt}
                                onGenerate={handleGenerate}
                                isGenerating={isGenerating}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

interface GeneratedVideo {
    id: string;
    prompt: string;
    thumbnail: string;
    videoUrl: string;
    duration: string;
    quality: string;
    createdAt: Date;
    isGenerating: boolean;
}

interface VideoGalleryProps {
    videos: GeneratedVideo[];
    selectedVideo: GeneratedVideo | null;
    onSelectVideo: (video: GeneratedVideo) => void;
    isGenerating: boolean;
    currentPrompt: string;
}

const VideoGallery: React.FC<VideoGalleryProps> = ({ 
    videos, 
    selectedVideo, 
    onSelectVideo, 
    isGenerating,
    currentPrompt 
}) => {
    return (
        <div className="video-gallery">
            <div className="gallery-header">
                <h3 className="gallery-title text-main-2">Generated Videos</h3>
                <div className="gallery-stats">
                    <span className="text-body-3 text-main">{videos.length} videos</span>
                </div>
            </div>

            <div className="gallery-content">
                {/* Currently Generating Video */}
                {isGenerating && (
                    <div className="video-card generating">
                        <div className="video-thumbnail">
                            <div className="generating-overlay">
                                <div className="spinner-circle">
                                    <div className="spinner-child"></div>
                                    <div className="spinner-child spinner-circle2"></div>
                                    <div className="spinner-child spinner-circle3"></div>
                                </div>
                                <p className="generating-text text-body-3">Generating...</p>
                            </div>
                        </div>
                        <div className="video-info">
                            <p className="video-prompt text-body-3">{currentPrompt}</p>
                            <div className="video-meta">
                                <span className="meta-item">5s</span>
                                <span className="meta-item">720p</span>
                                <span className="meta-item">Generating</span>
                            </div>
                        </div>
                    </div>
                )}

                {/* Generated Videos Grid */}
                <div className="videos-grid">
                    {videos.map((video) => (
                        <VideoCard 
                            key={video.id}
                            video={video}
                            isSelected={selectedVideo?.id === video.id}
                            onSelect={() => onSelectVideo(video)}
                        />
                    ))}
                </div>

                {/* Empty State */}
                {videos.length === 0 && !isGenerating && (
                    <div className="empty-gallery">
                        <div className="empty-icon">
                            <i className="icon icon-video"></i>
                        </div>
                        <h4 className="empty-title text-main-2">No videos yet</h4>
                        <p className="empty-description text-body-3 text-main">
                            Start by entering a prompt to generate your first AI video
                        </p>
                    </div>
                )}
            </div>

            {/* Selected Video Player */}
            {selectedVideo && (
                <div className="video-player-section">
                    <div className="player-container">
                        <video 
                            controls 
                            poster={selectedVideo.thumbnail}
                            className="main-video-player"
                            key={selectedVideo.id}
                        >
                            <source src={selectedVideo.videoUrl} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="player-actions">
                        <button className="tf-btn style-2 animate-btn">
                            <i className="icon icon-download"></i>
                            <span className="text-body-3">Download</span>
                        </button>
                        <button className="tf-btn style-3 animate-btn">
                            <i className="icon icon-share"></i>
                            <span className="text-body-3">Share</span>
                        </button>
                        <button className="tf-btn style-transparent animate-btn">
                            <i className="icon icon-refresh"></i>
                            <span className="text-body-3">Regenerate</span>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

interface VideoCardProps {
    video: GeneratedVideo;
    isSelected: boolean;
    onSelect: () => void;
}

const VideoCard: React.FC<VideoCardProps> = ({ video, isSelected, onSelect }) => {
    return (
        <div 
            className={`video-card ${isSelected ? 'selected' : ''}`}
            onClick={onSelect}
        >
            <div className="video-thumbnail">
                <Image 
                    src={video.thumbnail} 
                    alt={video.prompt}
                    width={200}
                    height={112}
                    className="thumbnail-image"
                />
                <div className="play-overlay">
                    <div className="play-button">
                        <i className="icon icon-play"></i>
                    </div>
                </div>
                <div className="video-duration">
                    {video.duration}
                </div>
            </div>
            <div className="video-info">
                <p className="video-prompt text-body-3">{video.prompt}</p>
                <div className="video-meta">
                    <span className="meta-item">{video.quality}</span>
                    <span className="meta-item">{video.duration}</span>
                    <span className="meta-item">
                        {video.createdAt.toLocaleDateString()}
                    </span>
                </div>
            </div>
        </div>
    );
};

interface ControlPanelProps {
    prompt: string;
    setPrompt: (prompt: string) => void;
    onGenerate: (e: React.FormEvent) => void;
    isGenerating: boolean;
}

const ControlPanel: React.FC<ControlPanelProps> = ({ 
    prompt, 
    setPrompt, 
    onGenerate, 
    isGenerating 
}) => {
    const [selectedDuration, setSelectedDuration] = useState("5s");
    const [selectedQuality, setSelectedQuality] = useState("720p");
    const [selectedModel, setSelectedModel] = useState("Qore-2.5");

    return (
        <div className="control-panel">
            <div className="panel-header">
                <h3 className="panel-title text-main-2">AI Video Generator</h3>
                <p className="panel-subtitle text-body-3 text-main">
                    Create stunning videos from text descriptions
                </p>
            </div>

            <div className="generation-form">
                <form onSubmit={onGenerate}>
                    {/* Prompt Input */}
                    <div className="prompt-section">
                        <label className="input-label text-body-3 text-main-2">
                            Describe your video
                        </label>
                        <div className="prompt-input-wrapper">
                            <textarea
                                className="prompt-textarea"
                                placeholder="A cheerful girl introduces her hefty boyfriend to her surprised mother. As he enthusiastically..."
                                value={prompt}
                                onChange={(e) => setPrompt(e.target.value)}
                                disabled={isGenerating}
                                rows={4}
                            />
                        </div>
                    </div>

                    {/* Settings Row */}
                    <div className="settings-row">
                        <div className="setting-group">
                            <label className="setting-label text-body-3 text-main">Model</label>
                            <select 
                                className="setting-select"
                                value={selectedModel}
                                onChange={(e) => setSelectedModel(e.target.value)}
                            >
                                <option value="Qore-2.5">Qore-2.5</option>
                                <option value="Qore-Pro">Qore-Pro</option>
                                <option value="Qore-Ultra">Qore-Ultra</option>
                            </select>
                        </div>

                        <div className="setting-group">
                            <label className="setting-label text-body-3 text-main">Quality</label>
                            <select 
                                className="setting-select"
                                value={selectedQuality}
                                onChange={(e) => setSelectedQuality(e.target.value)}
                            >
                                <option value="480p">480p</option>
                                <option value="720p">720p</option>
                                <option value="1080p">1080p</option>
                            </select>
                        </div>

                        <div className="setting-group">
                            <label className="setting-label text-body-3 text-main">Duration</label>
                            <select 
                                className="setting-select"
                                value={selectedDuration}
                                onChange={(e) => setSelectedDuration(e.target.value)}
                            >
                                <option value="3s">3s</option>
                                <option value="5s">5s</option>
                                <option value="10s">10s</option>
                            </select>
                        </div>
                    </div>

                    {/* Generate Button */}
                    <button 
                        type="submit" 
                        className="generate-btn tf-btn style-2 animate-btn w-100"
                        disabled={isGenerating || !prompt.trim()}
                    >
                        {isGenerating ? (
                            <>
                                <div className="spinner-circle small">
                                    <div className="spinner-child"></div>
                                </div>
                                <span className="text-body-2">Generating Video...</span>
                            </>
                        ) : (
                            <>
                                <i className="icon icon-video"></i>
                                <span className="text-body-2">Generate Video</span>
                            </>
                        )}
                    </button>
                </form>
            </div>

            {/* Additional Options */}
            <div className="additional-options">
                <div className="option-item">
                    <div className="option-info">
                        <h6 className="option-title text-main-2">Advanced Settings</h6>
                        <p className="option-desc text-body-3 text-main">
                            Fine-tune your video generation
                        </p>
                    </div>
                    <button className="tf-btn style-transparent">
                        <i className="icon icon-settings"></i>
                    </button>
                </div>

                <div className="option-item">
                    <div className="option-info">
                        <h6 className="option-title text-main-2">Batch Generate</h6>
                        <p className="option-desc text-body-3 text-main">
                            Generate multiple variations
                        </p>
                    </div>
                    <button className="tf-btn style-transparent">
                        <i className="icon icon-copy"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

// UNUSED COMPONENTS - COMMENTED OUT TO FIX COMPILATION
// These components are defined but not used in the main VideoGenerateSection

/*
interface VideoPromptFormProps {
    prompt: string;
    setPrompt: (prompt: string) => void;
    onGenerate: (e: React.FormEvent) => void;
    isGenerating: boolean;
}

const VideoPromptForm: React.FC<VideoPromptFormProps> = ({ 
    prompt, 
    setPrompt, 
    onGenerate, 
    isGenerating 
}) => {
    return (
        <div className="box-ask-wrap video-prompt-wrap">
            <div className="box-ask">
                <form className="form-ask wow fadeInUp" onSubmit={onGenerate}>
                    <div className="form-content">
                        <input 
                            className="style-2" 
                            type="text" 
                            placeholder="Describe the video you want to generate..."
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            disabled={isGenerating}
                        />

                        <fieldset className="field-bottom">
                            <div className="field_left">
                                <button type="button" className="btn-ip type-circle ip-add">
                                    <i className="icon icon-plus" />
                                </button>

                                <button type="button" className="btn-ip ip-modern text-body-3">
                                    <i className="icon icon-video" />
                                    AI Video
                                    <i className="icon icon-arrow-caret-down fs-8" />
                                </button>
                            </div>

                            <div className="field_right">
                                <button type="button" className="btn-ip type-transparent ip-voice">
                                    <i className="icon icon-micro" />
                                </button>

                                <button 
                                    type="submit" 
                                    className="btn-submit btn-ip type-circle"
                                    disabled={isGenerating || !prompt.trim()}
                                >
                                    {isGenerating ? (
                                        <div className="spinner-circle">
                                            <div className="spinner-child"></div>
                                        </div>
                                    ) : (
                                        <i className="icon icon-arrow-top" />
                                    )}
                                </button>
                            </div>
                        </fieldset>
                    </div>
                </form>
            </div>
            <span className="hafl-plus pst-left_bot item_bot wow bounceInScale"></span>
            <span className="hafl-plus pst-right_bot item_bot wow bounceInScale"></span>
            <span className="hafl-plus pst-left_top item_top wow bounceInScale"></span>
            <span className="hafl-plus pst-right_top item_top wow bounceInScale"></span>
        </div>
    );
};
*/

/*
const VideoOptionsPanel: React.FC = () => {
    const [selectedDuration, setSelectedDuration] = useState("5s");
    const [selectedRatio, setSelectedRatio] = useState("16:9");
    const [selectedStyle, setSelectedStyle] = useState("realistic");

    const durations = ["3s", "5s", "10s", "15s"];
    const ratios = ["16:9", "9:16", "1:1", "4:3"];
    const styles = ["realistic", "animated", "cinematic", "artistic"];

    return (
        <div className="video-options-panel">
            <div className="options-grid">
                <div className="option-group">
                    <h6 className="option-title text-main-2">Duration</h6>
                    <div className="option-buttons">
                        {durations.map((duration) => (
                            <button
                                key={duration}
                                type="button"
                                className={`tf-btn-tab ${selectedDuration === duration ? 'active' : ''}`}
                                onClick={() => setSelectedDuration(duration)}
                            >
                                {duration}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="option-group">
                    <h6 className="option-title text-main-2">Aspect Ratio</h6>
                    <div className="option-buttons">
                        {ratios.map((ratio) => (
                            <button
                                key={ratio}
                                type="button"
                                className={`tf-btn-tab ${selectedRatio === ratio ? 'active' : ''}`}
                                onClick={() => setSelectedRatio(ratio)}
                            >
                                {ratio}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="option-group">
                    <h6 className="option-title text-main-2">Style</h6>
                    <div className="option-buttons">
                        {styles.map((style) => (
                            <button
                                key={style}
                                type="button"
                                className={`tf-btn-tab ${selectedStyle === style ? 'active' : ''}`}
                                onClick={() => setSelectedStyle(style)}
                            >
                                {style}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
*/

/*
interface VideoOutputAreaProps {
    generatedVideo: string | null;
    isGenerating: boolean;
}

const VideoOutputArea: React.FC<VideoOutputAreaProps> = ({ 
    generatedVideo, 
    isGenerating 
}) => {
    return (
        <div className="video-output-area">
            <div className="output-container">
                {isGenerating ? (
                    <div className="generating-state">
                        <div className="generating-animation">
                            <div className="spinner-circle">
                                <div className="spinner-child spinner-circle2"></div>
                                <div className="spinner-child spinner-circle3"></div>
                                <div className="spinner-child spinner-circle4"></div>
                                <div className="spinner-child spinner-circle5"></div>
                                <div className="spinner-child spinner-circle6"></div>
                                <div className="spinner-child spinner-circle7"></div>
                                <div className="spinner-child spinner-circle8"></div>
                                <div className="spinner-child spinner-circle9"></div>
                            </div>
                        </div>
                        <h5 className="generating-text text-main-2">Generating your video...</h5>
                        <p className="text-body-3 text-main">This may take a few moments</p>
                    </div>
                ) : generatedVideo ? (
                    <div className="video-result">
                        <div className="video-container">
                            <video 
                                controls 
                                poster={generatedVideo}
                                className="generated-video"
                            >
                                <source src="/assets/videos/sample-video.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="video-actions">
                            <button className="tf-btn style-2 animate-btn">
                                <i className="icon icon-download"></i>
                                <span className="text-body-3">Download</span>
                            </button>
                            <button className="tf-btn style-3 animate-btn">
                                <i className="icon icon-share"></i>
                                <span className="text-body-3">Share</span>
                            </button>
                            <button className="tf-btn style-transparent animate-btn">
                                <i className="icon icon-refresh"></i>
                                <span className="text-body-3">Regenerate</span>
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="empty-state">
                        <div className="empty-icon">
                            <i className="icon icon-video fs-64"></i>
                        </div>
                        <h5 className="empty-title text-main-2">Ready to Create</h5>
                        <p className="text-body-3 text-main">
                            Enter a prompt to generate your first AI video
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};
*/