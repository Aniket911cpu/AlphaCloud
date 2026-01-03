package api

import (
    "context"
    // pb "github.com/nexuscloud/platform/pkg/api/v1"
)

// ComputeServer implements the ComputeService gRPC interface
type ComputeServer struct {
    // UnimplementedComputeServiceServer
}

/*
func (s *ComputeServer) CreateInstance(ctx context.Context, req *pb.CreateInstanceRequest) (*pb.Instance, error) {
    // Logic to call K8s/KubeVirt to provision VM
    return &pb.Instance{
        Id: "mock-id-123",
        Name: req.Name,
        Status: "provisioning",
    }, nil
}
*/
