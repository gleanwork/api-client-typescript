// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

// StructuredLink - The display configuration for a link.
type StructuredLink struct {
	// The display name for the link
	Name *string `json:"name,omitempty"`
	// The URL for the link.
	URL *string `json:"url,omitempty"`
	// Defines how to render an icon
	IconConfig *IconConfig `json:"iconConfig,omitempty"`
}

func (o *StructuredLink) GetName() *string {
	if o == nil {
		return nil
	}
	return o.Name
}

func (o *StructuredLink) GetURL() *string {
	if o == nil {
		return nil
	}
	return o.URL
}

func (o *StructuredLink) GetIconConfig() *IconConfig {
	if o == nil {
		return nil
	}
	return o.IconConfig
}
