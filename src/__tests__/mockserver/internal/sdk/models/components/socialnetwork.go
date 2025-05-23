// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

type SocialNetwork struct {
	// Possible values are "twitter", "linkedin".
	Name string `json:"name"`
	// Human-readable profile name.
	ProfileName *string `json:"profileName,omitempty"`
	// Link to profile.
	ProfileURL string `json:"profileUrl"`
}

func (o *SocialNetwork) GetName() string {
	if o == nil {
		return ""
	}
	return o.Name
}

func (o *SocialNetwork) GetProfileName() *string {
	if o == nil {
		return nil
	}
	return o.ProfileName
}

func (o *SocialNetwork) GetProfileURL() string {
	if o == nil {
		return ""
	}
	return o.ProfileURL
}
