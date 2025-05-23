// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

// BulkIndexGroupsRequest - Describes the request body for the /bulkindexgroups API call
type BulkIndexGroupsRequest struct {
	// Unique id that must be used for this instance of datasource groups upload
	UploadID string `json:"uploadId"`
	// true if this is the first page of the upload. Defaults to false
	IsFirstPage *bool `json:"isFirstPage,omitempty"`
	// true if this is the last page of the upload. Defaults to false
	IsLastPage *bool `json:"isLastPage,omitempty"`
	// Flag to discard previous upload attempts and start from scratch. Must be specified with isFirstPage=true
	ForceRestartUpload *bool `json:"forceRestartUpload,omitempty"`
	// datasource of the groups
	Datasource string `json:"datasource"`
	// batch of groups for the datasource
	Groups []DatasourceGroupDefinition `json:"groups"`
	// True if older group data needs to be force deleted after the upload completes. Defaults to older data being deleted only if the percentage of data being deleted is less than a reasonable threshold. This must only be set when `isLastPage = true`
	DisableStaleDataDeletionCheck *bool `json:"disableStaleDataDeletionCheck,omitempty"`
}

func (o *BulkIndexGroupsRequest) GetUploadID() string {
	if o == nil {
		return ""
	}
	return o.UploadID
}

func (o *BulkIndexGroupsRequest) GetIsFirstPage() *bool {
	if o == nil {
		return nil
	}
	return o.IsFirstPage
}

func (o *BulkIndexGroupsRequest) GetIsLastPage() *bool {
	if o == nil {
		return nil
	}
	return o.IsLastPage
}

func (o *BulkIndexGroupsRequest) GetForceRestartUpload() *bool {
	if o == nil {
		return nil
	}
	return o.ForceRestartUpload
}

func (o *BulkIndexGroupsRequest) GetDatasource() string {
	if o == nil {
		return ""
	}
	return o.Datasource
}

func (o *BulkIndexGroupsRequest) GetGroups() []DatasourceGroupDefinition {
	if o == nil {
		return []DatasourceGroupDefinition{}
	}
	return o.Groups
}

func (o *BulkIndexGroupsRequest) GetDisableStaleDataDeletionCheck() *bool {
	if o == nil {
		return nil
	}
	return o.DisableStaleDataDeletionCheck
}
