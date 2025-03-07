import {
    ComponentType,
    AspectRatio,
    OutputFormat,
    StylePreset,
    COMPONENT_DEFAULTS,
    STYLE_MODIFIERS,
} from './payloadtyles'; // Adjust the import path as needed

export interface ImagePayload {
    componentType?: ComponentType;
    colorScheme?: string[];
    prompt?: string;
    negativePrompt?: string;
    aspectRatio?: AspectRatio;
    outputFormat?: OutputFormat;
    stylePreset?: StylePreset;
}
export interface ReturnPayload {
    prompt: string;
    negative_prompt: string;
    aspect_ratio: AspectRatio;
    output_format: OutputFormat;
}
export default function generateImagePayload(payload: ImagePayload):ReturnPayload {
    // Retrieve defaults based on component type
    const componentDefaults = payload.componentType ? COMPONENT_DEFAULTS[payload.componentType] : { basePrompt: '', negativePrompt: '', defaultRatio: AspectRatio.RATIO_1_1 };

    // Compile color scheme as a descriptive phrase
    const colorSchemeDescription = payload.colorScheme
        ? `in a color scheme featuring ${payload.colorScheme.join(', ')}`
        : "with default colors blue";

    // Build the style description and keywords
    const styleModifier = payload.stylePreset?STYLE_MODIFIERS[payload.stylePreset]:'';
    const styleDescription = styleModifier ? styleModifier.description : '';

    // Construct the detailed prompt
    const getRandomKeywords = (keywords: string[], count: number): string[] => {
        const shuffled = keywords.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    };

    const selectedKeywords = styleModifier ? getRandomKeywords(styleModifier.keywords, 3) : [];

    const compiledPrompt = `
    ${componentDefaults?.basePrompt}.
    ${payload.prompt || ''} ${payload.colorScheme?.length ?? 0 > 0 ? colorSchemeDescription : ''}.
    Style: ${styleDescription}. ${selectedKeywords.join(', ')}.
    `.trim();

    
    const returnPayload = {
        prompt: compiledPrompt,
        negative_prompt: payload.negativePrompt || componentDefaults.negativePrompt,
        aspect_ratio: payload.aspectRatio || componentDefaults.defaultRatio,
        output_format: payload.outputFormat || OutputFormat.JPEG,
    };

    return returnPayload;
}

