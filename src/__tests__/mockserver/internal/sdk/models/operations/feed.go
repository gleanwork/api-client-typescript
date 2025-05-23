// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package operations

import (
	"mockserver/internal/sdk/models/components"
)

type FeedResponse struct {
	HTTPMeta components.HTTPMetadata `json:"-"`
	// OK
	FeedResponse *components.FeedResponse
}

func (o *FeedResponse) GetHTTPMeta() components.HTTPMetadata {
	if o == nil {
		return components.HTTPMetadata{}
	}
	return o.HTTPMeta
}

func (o *FeedResponse) GetFeedResponse() *components.FeedResponse {
	if o == nil {
		return nil
	}
	return o.FeedResponse
}
