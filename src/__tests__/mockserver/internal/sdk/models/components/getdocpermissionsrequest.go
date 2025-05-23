// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

type GetDocPermissionsRequest struct {
	// The Glean Document ID to retrieve permissions for.
	DocumentID *string `json:"documentId,omitempty"`
}

func (o *GetDocPermissionsRequest) GetDocumentID() *string {
	if o == nil {
		return nil
	}
	return o.DocumentID
}
