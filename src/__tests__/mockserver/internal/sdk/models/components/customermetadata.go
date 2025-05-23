// Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.

package components

type CustomerMetadata struct {
	// The user visible id of the salesforce customer account.
	DatasourceID *string `json:"datasourceId,omitempty"`
	// Custom fields specific to individual datasources
	CustomData map[string]CustomDataValue `json:"customData,omitempty"`
}

func (o *CustomerMetadata) GetDatasourceID() *string {
	if o == nil {
		return nil
	}
	return o.DatasourceID
}

func (o *CustomerMetadata) GetCustomData() map[string]CustomDataValue {
	if o == nil {
		return nil
	}
	return o.CustomData
}
