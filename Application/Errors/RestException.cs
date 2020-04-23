using System;
using System.Net;

namespace Application.Errors
{
    public class RestException : Exception
    {
        public HttpStatusCode Code { get; }
        public object Errors { get; }
        public RestException(HttpStatusCode code, object errors = null)
        {
            Errors = errors;
            Code = code;

        }
    }
}