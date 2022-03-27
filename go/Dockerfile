FROM golang:latest as build
WORKDIR /go/src/github.com/melquiadesrodrigues/desafio-go
COPY main.go .
RUN go mod init
RUN go build -ldflags "-s -w" -o /desafio-go

FROM scratch
COPY --from=build /desafio-go /
ENTRYPOINT  ["/desafio-go"]