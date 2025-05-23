// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

import (
	"mockserver/internal/sdk/utils"
)

// TeamEmail - Information about a team's email
type TeamEmail struct {
	// An email address
	Email string `json:"email"`
	// An enum of `PRIMARY`, `SECONDARY`, `ONCALL`, `OTHER`
	Type *string `default:"OTHER" json:"type"`
}

func (t TeamEmail) MarshalJSON() ([]byte, error) {
	return utils.MarshalJSON(t, "", false)
}

func (t *TeamEmail) UnmarshalJSON(data []byte) error {
	if err := utils.UnmarshalJSON(data, &t, "", false, false); err != nil {
		return err
	}
	return nil
}

func (o *TeamEmail) GetEmail() string {
	if o == nil {
		return ""
	}
	return o.Email
}

func (o *TeamEmail) GetType() *string {
	if o == nil {
		return nil
	}
	return o.Type
}
