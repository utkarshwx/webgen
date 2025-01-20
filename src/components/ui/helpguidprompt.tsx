import  { useState } from 'react'

export default function HelpGuide() {
    const [togglehide, setTogglehide] = useState(true)
    return (
        <>
            <div className={`mt-4 p-4 bg-gray-100 dark:bg-neutral-800 rounded-md ${togglehide ? "hidden" : ""}`} id="help-guide">
                <h2 className="text-lg font-bold mb-2">Help Guide</h2>
                <p className="text-sm mb-2">
                    Use the following guide to craft your image prompts effectively:
                </p>
                <ul className="list-disc pl-6 text-sm">
                    <li><strong>Minimalist:</strong> Clean, simple, and uncluttered designs with a focus on negative space and balance. Keywords: Elegant, Minimal details, Monochrome, Flat design, Sophisticated layout.</li>
                    <li><strong>Modern:</strong> Contemporary aesthetics with bold elements and sleek visuals. Keywords: Abstract shapes, Dynamic, Futuristic, Neon accents, Sleek design.</li>
                    <li><strong>Corporate:</strong> Professional, formal, and aligned with business branding. Keywords: Professional layout, Brand identity, Elegant typography, Clean lines, Business-focused.</li>
                    <li><strong>Creative:</strong> Artistic and imaginative visuals that explore unconventional ideas. Keywords: Artistic expression, Vivid colors, Surreal elements, Imaginative landscapes, Dreamlike visuals.</li>
                    <li><strong>Geometric:</strong> Shapes and symmetry-driven designs for structured aesthetics. Keywords: Symmetrical, Abstract geometry, Triangles and circles, Pattern-based design, Isometric projection.</li>
                    <li><strong>Art:</strong> Painterly textures, Oil painting effect, Watercolor, Abstract art, Museum-worthy.</li>
                    <li><strong>Professional Designs:</strong> Sleek aesthetics, Corporate presentation-ready, High-quality branding visuals.</li>
                    <li><strong>Photography:</strong> High-definition, Depth of field, Natural lighting, Golden hour, Portrait photography.</li>
                    <li><strong>Cartoons and Caricatures:</strong> Hand-drawn style, Playful characters, Whimsical details, Humorous exaggeration, Children's illustration.</li>
                    <li><strong>Sketch with Color:</strong> Pencil sketch outline, Colored shading, Artistic hand-drawn look, Creative sketch style.</li>
                    <li><strong>Video Game Design:</strong> 3D render, Fantasy landscapes, Pixel art, Futuristic game assets, Character concept art.</li>
                    <li><strong>Branding and Identity:</strong> Logo-centric design, Cohesive brand theme, Custom typography, Elegant color palette.</li>
                    <li><strong>Typography and Graphic Design:</strong> Bold headlines, Creative typography, Layered graphic elements, Modern infographics.</li>
                    <li><strong>Marketing Visuals:</strong> Call-to-action focus, Promotional banners, Vivid and attention-grabbing, Optimized for social media.</li>
                </ul>
            </div>
            <button
                className="mt-2 text-blue-500 hover:underline"
                onClick={() => setTogglehide(!togglehide)}
            >
                {togglehide ? "Open" : "Hide"} Guide
            </button>
        </>
    )
}
