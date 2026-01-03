package main

import (
	"log"
	"net"

	"google.golang.org/grpc"
    "github.com/nexuscloud/platform/internal/api"
)

func main() {
	log.Println("Starting NexusCloud Control Plane...")

	lis, err := net.Listen("tcp", ":50051")
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	s := grpc.NewServer()
    // Register services here
    // pb.RegisterComputeServiceServer(s, &api.ComputeServer{})

	log.Printf("Control Plane listening on %v", lis.Addr())
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
